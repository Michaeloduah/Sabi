// Card.jsx
import React from 'react';
import shortPink from '../assets/imgs/shorts-pink.jpg';
import shortWhite from '../assets/imgs/shorts-white.jpg';
import shortGrey from '../assets/imgs/shorts-grey.jpg';

function Card() {
  return (
    <div className="card">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-11 container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div class="">
        <img class="w-full" src={shortPink} alt="short" />
        <div class="grid grid-cols-2 gap-4 m-3">
          <img class="w-full" src={shortWhite} alt="short" />
          <img class="w-full" src={shortGrey} alt="short" />
        </div>
      </div>
      <div class="">
        <div class="">
          <h1 class="text-5xl">SABI LIFESTYLES SHORTS</h1>
          <del class="text-2xl">$600</del>
          <strong class="text-2xl text-red-500">$500</strong>
          <p class="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum iure
            adipisci reprehenderit odio quibusdam, dolore tempore beatae
            perferendis tenetur laborum? Quos, tempore assumenda alias ad
            dolorem laborum perferendis non harum blanditiis nesciunt quis,
            aperiam, deleniti error ab. Dolores, quos voluptatibus!
          </p>
        </div>
        <div class="">
          <p class="text-2xl mt-5">Available Colours</p>
          <i class="w-6 h-6 bg-pink-500 rounded-full inline-block border"></i>
          <i class="w-6 h-6 bg-white rounded-full inline-block border"></i>
          <i class="w-6 h-6 bg-gray-500 rounded-full inline-block border"></i>
        </div>
        <div class="">
          <p class="text-2xl mt-5">Available Sizes</p>
          <div class="flex space-x-2">
            <button
              class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 border"
            >
              XS
            </button>
            <button
              class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 border"
            >
              S
            </button>
            <button
              class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 border"
            >
              M
            </button>
            <button
              class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 border"
            >
              L
            </button>
            <button
              class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 border"
            >
              XL
            </button>
          </div>
          <h1 class="text-right text-blue-400">
            <a href="" class="">what is my size?</a>
          </h1>
        </div>
        <div class="flex space-x-2">
          <button
            class="px-4 py-2 bg-gray-600 text-white w-full rounded-md hover:bg-gray-700 border"
          >
            Add to Cart <span class="mdi mdi-cart-arrow-down text-xl"></span>
          </button>
          <button
            class="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 border"
          >
          <span class="mdi mdi-heart-outline text-2xl"></span>
          
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
