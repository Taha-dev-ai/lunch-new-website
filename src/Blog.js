import React from 'react'
import client1 from './images/client1.jpg';
import { Container } from 'react-bootstrap';
import './component/Blogg.css'

function Blog() {
    return (
        <div className='Blog'>
            <Container fluid='lg'>
                <div className='row'>
                    <div className="blog-right col-md-6 mb-5 mt-5">
                        <img src={client1} alt="" srcset="" />
                    </div>
                    <div className="blog-left col-md-6 mb-3 mt-5">
                        <h1>BEST PRACTICES FOR ON-PAGE SEO</h1>
                        <p>what is on-page seo? (importance and key elements) in the vast digital landscape, your website’s visibility is similar to a beacon in the night, guiding lost souls toward their desired destinations. this beacon is none other than on-page seo, a potent tool that propels your web content to the forefront of search engine results.  it’s […]</p>
                        <button class="button mt-3">READ MORE</button>
                    </div>
                </div>
            </Container>
            <div className="container">
                <div className="row">
                    <h1 className="title">TheGem Wordpress Theme for Blogger</h1>
                    <p className="subtitle">Explore the most amazing WordPress theme for bloggers</p>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <img src="https://via.placeholder.com/300" alt="Blog post" />
                                <h2>Image Blog Post</h2>
                                <p>Description of the blog post goes here...</p>
                                {/* <button>READ MORE</button> */}
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <img src="https://via.placeholder.com/300" alt="Blog post" />
                                <h2>Another Blog Post</h2>
                                <p>Description of another blog post goes here...</p>
                                {/* <button>READ MORE</button> */}
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <img src="https://via.placeholder.com/300" alt="Blog post" />
                                <h2>Image Blog Post</h2>
                                <p>Description of the blog post goes here...</p>
                                {/* <button>READ MORE</button> */}
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <img src="https://via.placeholder.com/300" alt="Blog post" />
                                <h2>Another Blog Post</h2>
                                <p>Description of another blog post goes here...</p>
                                {/* <button>READ MORE</button> */}
                            </div>
                        </div>
                        {/* Add more timeline items as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
