import React from "react";

export default function Footer() {
  return (
    <footer className="dark:bg-slate-900 flex dark:text-white p-4 bg-white w-screen">
      <div className="md:w-[87%] flex justify-between mx-auto items-center">
        <p className="text-center m-3">
          Copyright © 2023. Pew Vegas Ltd. All Rights Reserved.
        </p>

        <div className="items-center flex m-3">
          <a href="#" className="text-transparent">
            <img
              src="https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png"
              alt=""
              className="w-8 h-8"
            />
          </a>

          <a href="#" className="text-transparent mx-5">
            <img
              src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="w-8 h-8"
            />
          </a>

          <a href="#" className="text-transparent">
            <img
              src="https://th.bing.com/th/id/R.c3fcc390427d68b89647e834adf7fc87?rik=5W%2fa9g9fys8WDg&pid=ImgRaw&r=0"
              alt=""
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
