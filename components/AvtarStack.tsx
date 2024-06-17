import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useOthers, useSelf } from "@/liveblocks.config";

export default function AvtarStack() {
    const users = useOthers();
    const userLen=users.length;
    const currentUser = useSelf();
  
    const array=[{ id: 1, name: "John Doe", designation: "Software Engineer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", }, { id: 2, name: "Robert Johnson", designation: "Product Manager", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", }, { id: 3, name: "Jane Smith", designation: "Data Scientist", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", }, { id: 4, name: "Emily Davis", designation: "UX Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", }, { id: 5, name: "Tyler Durden", designation: "Soap Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80", }, { id: 6, name: "Dora", designation: "The Explorer", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80", },]
    return (
      <main className="flex pr-10  select-none place-content-center place-items-center">
        <div className="flex pl-3">
          <AnimatedTooltip items={array.slice(0, userLen) }  />

          {currentUser && (
            <div className="  relative ml-8 first:ml-0">
              <AnimatedTooltip items={[{id:currentUser.connectionId,name: "You", designation: "Software Engineer",image:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"}]} />
            </div>
          )}
        </div>
      </main>
    );
  }
  