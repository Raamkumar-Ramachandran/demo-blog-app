import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { baseUrl } from '../../index';

import styles from './blogListing.module.css'

const BlogListing = () => {

    const [blog, setblog] = useState([]);
    const [deleteblog, setdeleteblog] = useState(0);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(data => setblog(data));

        return () => { };

    }, [deleteblog]);

    const fnDeleteHandler = (element) => {
        blog.filter((item) => {
            if (item.id === element) {
                
                fetch(`${baseUrl}/${element}`, {
                    method: 'DELETE',
                })
                .then(res => setdeleteblog(element));
                alert("Blog Deleted 😥");
            }
        });
    }

    return (
        <>
            <ul className={styles.blog__items}>{blog.map((item) => (
                <li key={item.id} className={styles.blog__item}>
                    <div>
                        <div className={styles.blog__title}>{item.blog_title}</div>
                        <div>{item.author_name}</div>
                    </div>
                    <div className={styles.blog__content}>{item.blog_snippet}</div>
                    <Link to={`/detail/${item.id}`} className={styles.blog__cta} >Read More</Link>
                    <button onClick={() => fnDeleteHandler(item.id)} className={styles.blog__cta} >Delete Blog</button>
                </li>
            ))}</ul>
        </>
    );
}

export default BlogListing;
