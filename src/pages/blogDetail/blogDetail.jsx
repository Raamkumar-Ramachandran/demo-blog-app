import React, { useState, useEffect } from 'react';

import { baseUrl } from '../../index';

import { useParams } from 'react-router';

import styles from './blogDetail.module.css';


const BlogDetail = () => {

    let blogId = useParams();
    const [detailData, setdetailData] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}${blogId.id}`)
            .then(res => res.json())
            .then(data => setdetailData(data));

        return () => { };
    }, []);

    return (
        <div>
            <div className={styles.blog__title}>{detailData.blog_title}</div>
            <div>{detailData.author_name}</div>
            <div>{detailData.blog_content}</div>
        </div>
    );
}

export default BlogDetail;
