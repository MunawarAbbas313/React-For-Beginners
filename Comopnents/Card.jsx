import React from "react";

function Card({username, role ,profile}){
  
    
    
    
    
    return(
        
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-4">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"src={profile} width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font- bg-green-400">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {role}
      </div>
    </figcaption>
  </div>
</figure>
    )
    }

export default Card;