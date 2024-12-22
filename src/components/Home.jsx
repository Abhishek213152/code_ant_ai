import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

const Home = () => {
  return (
    <div>
      <div>
        {/* <div>left</div> */}
        {/* Right Portion */}
        <div>
          <div className="bg-customGray p-20">
            <div className="flex flex-row items-center gap-3 justify-center">
              <img src="./src/assets/logo.svg" alt="" />
              <p>CodeAnt AI</p>
            </div>
            <div className="flex justify-center mt-2">
              <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
            </div>
            <div>
              <div className="flex justify-center mt-4 w-full">
                <input type="text" className="w-80 rounded-xl h-10" />
              </div>
            </div>
            <div className="flex flex-col justify-center w-80 mt-5">
              <div className="flex flex-row gap-3 border-black mt-4 p-2 justify-center bg-white rounded-xl">
                <FaGithub size={25} />
                <p>Sign in with Github</p>
              </div>
              <div className="flex flex-row gap-3 border-black mt-4 p-2 justify-center bg-white rounded-xl">
                <FaBitbucket size={25} />
                <p>Sign in with Bitbucket</p>
              </div>
              <div className="flex flex-row gap-3 border-black mt-4 p-2 justify-center bg-white rounded-xl">
                <VscAzureDevops size={25} />
                <p>Sign in with Azure Devops</p>
              </div>
              <div className="flex flex-row gap-3 border-black mt-4 p-2 justify-center bg-white rounded-xl">
                <FaGithub size={25} />
                <p>Sign in with GitLab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;