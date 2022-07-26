import React from "react";

const BlogCard = () => {
  return (
    <div className="row my-5 blog-cards">
      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>Why I Became A Vegetarian</h3>
            <p>
              Explore all the reasons I switched my diet to Vegetarian and how
              it has helped me be my happiest, healthiest self (even though
              neither parents are Vegetarians).
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card mt-50">
          <div class="card-body">
            <h3>
              How To Get Your Humans To Take You To The Park When They Don't
              Want To
            </h3>
            <p>
              Do you ever really want to go to the park when your parents take
              you out but your parents had other plans? Me too! Learn all the
              ways I get my parents to continue to take me to the park even
              though they always say they don't like taking me there.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>Get Potty Trained With Me, Clyde!</h3>
            <p>
              Now this is a tough subject (it took me a while to get the hang of
              going potty outside and not wherever I wanted) but no fear! Clyde
              is here. Lets get potty trained together.{" "}
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="col-sm-3 h-50">
        <div className="card">
          <div class="card-body">
            <h3>My Favorite Toys</h3>
            <p>
              Oh My! How can I even choose! I have many toys so lets explore all
              the cool toys I have and the necessities that you need in your toy
              box.
            </p>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
