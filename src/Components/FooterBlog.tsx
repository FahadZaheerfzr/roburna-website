import { useEffect, useState } from 'react'
import blog1 from '../Assets/images/blogs/blog5.png'
import { NavLink } from 'react-router-dom'
import { Blog } from 'views/Blog/layerBox'
import { blogData } from 'utils/api_Helper'



export function FooterBlog() {
    const [latestBlog, setLatestBlog] = useState<Blog>()

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const { data } = await blogData();
                
                // Find the latest blog with published_at less than the current time
                const latest = data.find(blog => {
                    const publishDate = new Date(blog.publish_at);
                    const currentDate = new Date();
                    return publishDate <= currentDate;
                });

                setLatestBlog(latest);
            } catch (err) {
                console.log(err);
            }
        };

        loadBlogs();
    }, []);



    return (
        <div className='mt-5 labsblog'>
            <h5>
                OUR LATEST BLOG POST
            </h5>
            {latestBlog && <p>
                <img src={latestBlog.image} alt={blog1} width='95px' height='95px' />
                <NavLink to={`/blog/${latestBlog.id}/${latestBlog.title.replace(/\s+/g, '-')}`}>
                    <b>{latestBlog.title}</b></NavLink>
                <p>{latestBlog.short_description}</p>

            </p>
            }
        </div>
    );
}

