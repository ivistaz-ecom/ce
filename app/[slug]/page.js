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
                    `${configData.apiDomainURL}/ce-seo-blog?embed&slug=${slug

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


    // Generate Schema Markup
    const generateSchemaMarkup = (post) => {
        return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title.rendered,
            "description": post.acf.meta_description || "No description provided",
            // "author": {
            //     "@type": "Person",
            //     "name": post.acf.author_name || "Unknown Author"
            // },
            // "datePublished": post.date,
            // "dateModified": post.modified,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${configData.mainWebUrl}/${post.slug}`
            },
            "publisher": {
                "@type": "Organization",
                "name": "Your Organization Name",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${configData.mainWebUrl}/path-to-logo.png`
                }
            },
            "image": {
                "@type": "ImageObject",
                "url": post.acf.featured_image_url || `${configData.mainWebUrl}/default-image.png`,
                "height": 600,
                "width": 1200
            }
        };
    };


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
                        <title>{post.acf.meta_title}</title>
                        <meta name="description" content={post.acf.meta_description} />
                        <meta http-equiv="content-language" content="en"></meta>
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href={`${configData.mainWebUrl}/${post.slug}`} />

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(generateSchemaMarkup(post)),
                            }}
                        />
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
