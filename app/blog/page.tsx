import NavBar from "@/components/PageComponents/navbar";
import BlogContent from "@/components/PageComponents/blogContent";

export default function Blog() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
          {/* Top Left Pink/Purple Splash */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full 
                          bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-400 
                          opacity-40 blur-[180px]"></div>
    
          {/* Top Right Cyan/Blue Splash */}
          <div className="absolute -top-20 -right-40 w-[450px] h-[450px] rounded-full 
                          bg-gradient-to-bl from-cyan-400 via-sky-500 to-blue-500 
                          opacity-40 blur-[180px]"></div>
    
          {/* Bottom Left Orange/Yellow Splash */}
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full 
                          bg-gradient-to-tr from-yellow-400 via-orange-500 to-amber-400 
                          opacity-40 blur-[200px]"></div>
    
          {/* Bottom Right Green/Cyan Splash */}
          <div className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full 
                          bg-gradient-to-tl from-green-400 via-emerald-500 to-cyan-400 
                          opacity-35 blur-[220px]"></div>
    
          {/* Center Faint Glow for Blend */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full 
                          bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 
                          opacity-20 blur-[200px]"></div>
          <NavBar />
          <BlogContent />
        </div>
  )
}