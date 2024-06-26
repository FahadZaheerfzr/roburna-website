/* eslint-disable jsx-a11y/alt-text */
import moment from "moment";
import { NavLink } from "react-router-dom";

export interface Blog {
  author: string;
  created_at: string;
  deleted_at: string;
  details: string;
  id: number;
  image: string;
  short_description: string;
  title: string;
  updated_at: string;
  view_count: number;
  description: string;
  tag: string;
  publish_at: string;
}

interface Iblog {
  blog: Blog;
}

export const formatDateTime = (date: string) => {
  const momentValue = moment(date, true).format("MMM D, yyyy");
  return momentValue;
};

export const LayerOne: React.FC<Iblog> = ({ blog }) => {
  return (
    <div className="col-lg-6 col-12 mb-5">
      <div className="home-blog-card">
        <img  src={blog.image}  style={{ height: "442px" }} />

        <div className="blog-card-bottom lg:h-[700px] h-[500px]">
          <span>
            {blog.tag} | {formatDateTime(blog.publish_at)}
          </span>
          <h4>{blog.title}</h4>
          <p>{blog.short_description}</p>
          <NavLink
            to={`/blog/${blog.id}/${blog.title.replace(/\s+/g, "-")}`}
            className="--btn-1"
            style={{ marginTop: "auto" }}
          >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export const LayerTwo: React.FC<Iblog> = ({ blog }) => {
  return (
    <div className="col-lg-4 col-12 mb-5">
      <div className="home-blog-card">
        <img src={blog.image} />
        <div className="blog-card-bottom lg:h-[700px] h-[400px]">
          <div>
            <span>
              {blog.tag} | {formatDateTime(blog.publish_at)}
            </span>
            <h5>{blog.title}</h5>
            <p>{blog.short_description}</p>
          </div>
          <NavLink
            to={`/blog/${blog.id}/${blog.title.replace(/\s+/g, "-")}`}
            className="blog-slider-btn gradient-color"
            style={{ marginTop: "auto" }}
          >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};
