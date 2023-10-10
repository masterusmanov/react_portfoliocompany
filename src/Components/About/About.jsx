import React from "react";

const About = () => {
  return (
    <div className="bg-[#104AF2] py-3 md:py-5 lg:py-5 mt-[50px]">
      <div className="container mx-auto ">
        <h2 className="text-white md:text-[34px] font-bold">Bizning xizmatlarimiz</h2>
        <p className="text-white text-[10px] md:text-[14px] xl:text-[18px] ">Jamoa o'z sohasining ustasi bo'lgan mutahasislardan yig'ilgan. Jamoamizning har bir a'zosi loyihangizni muvafaqqiyatga yetaklaydi.</p>
        <div className="md:flex lg:flex justify-between gap-5 lg:mt-10">
          <div className="lg:w-1/4">
            <h5 className="text-white border-l-4 lg:text-[26px] border-blue-400 pl-2">IT</h5>
            <h6 className="text-white text-[10px] lg:text-[14px]">Mobile progmmalar, veb saytlardan tortib CRM sistemasini tizimlashtirishgacha bo'lgan sifatli xizmatlar</h6>
          </div>
          <div className="lg:w-1/4">
            <h5 className="text-white lg:text-[26px] border-l-4 border-blue-400 pl-2">Veb sayt</h5>
            <h6 className="text-white text-[10px] lg:text-[14px]">Sayt dizaynini loyihalash, funksionalligini oshirish, brauzerlarda to'g'ri ishlashini taminlash va shu qator vazifalarni o'z ichiga oladi</h6>
          </div>
          <div className="lg:w-1/4">
            <h5 className="text-white lg:text-[26px] border-l-4 border-blue-400 pl-2">Ta'lim</h5>
            <h6 className="text-white text-[10px] lg:text-[14px]">IT ni mutaxasislardan o'rganing. Uzoq masofadan kelishingiz shart emas, siz shunchaki ro'yhatdan o'ting, biz oldingizga borib ilm ulashamiz</h6>
          </div>
          <div className="md:mr-5 lg:w-1/4 ">
            <h5 className="text-white lg:text-[26px] border-l-4 border-blue-400 pl-1">Cybersport</h5>
            <h6 className="text-white text-[10px] lg:text-[14px]">Ommabop va adrinalinga boy bo'lgan musobaqalar.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
