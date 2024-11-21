"use client";
import React, { useEffect, useState } from 'react';
import configData from '../../config';
import { usePathname } from 'next/navigation';
import Header from '../../components/Header/Header';

const Post = ({ params }) => {
    const { slug } = params;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://docs.fuzhio.org/wp-json/wp/v2/ce-seo-blog?embed&slug=${slug

                    }`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                console.log(result);
                if (Array.isArray(result) && result.length > 0) {
                    setData(result);
                } else {
                    setData(null); // Handle the case when there's no data
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>Not found</div>;
    }

    // Render the post data here if available
    return (
        <>
            <style>
                {
                    `
                p{
                    font-size:18px !important;
                    margin-bottom: 1rem;
                }
                `
                }
            </style>
            <Header />
            {data.map((post, index) => (
                <div key={index}>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>{post.acf.meta_title_}</title>
                        <meta name="description" content={post.acf.meta_description} />
                        <meta http-equiv="content-language" content="en"></meta>
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href={`https://upfront.global/${post.slug}`} />
                    </head>
                    <div
                        className="flex items-center justify-center text-white text-center lg:text-6xl text-3xl"
                        style={{
                            background:
                                "linear-gradient(145deg, rgba(174,62,57,1) 30%, rgba(22,161,0,1) 80%)",
                            height: "600px",
                            color: "#fff",
                        }}
                    >
                        <h1
                            className="fs-1 fw-bold"
                            dangerouslySetInnerHTML={{ __html: data[0]?.title.rendered }}
                        />
                    </div>

                    <div className='flex justify-center'>
                        <div className='lg:w-[90%] w-full lg:pt-10 py-3 lg:px-0 px-3'>
                            <p
                                dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
};

export default Post;
