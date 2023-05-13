import Image from "next/image";
export default function ImgTest() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1683549003905-a1f385e3de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        width={600}
        height={500}
        alt="beutiful room for single"
        
      />
    </div>
  );
}
