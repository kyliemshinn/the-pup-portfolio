import React from "react";

const BlogCard = () => {
  return (
    <div className="row my-5">
      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>Why I Became A Vegetarian</h3>
            <p>the blog text.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>How To Get Your Humans To Take You To The Park When They Don't Want To</h3>
            <p>the blog text.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>Get Potty Trained With Me, Clyde!</h3>
            <p>the blog text.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>My Favorite Toys</h3>
            <p>the blog text.</p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
