import { Carousel } from "antd";

const contentStyle = {
  // height: "60vh",
  color: "#fff",
  background: "#364d79",
  width: "100%",
  height: "80vh",
};

function Hero() {
  return (
    <>
      <Carousel autoplay>
        <div className="relative">
          <div style={contentStyle}>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="/resalatna.png"
            />
            <div className="  w-96  text-white absolute top-36 right-32 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-40" />

              <div className="text-white relative z-10 w-full h-full text-right p-10 flex flex-col space-y-5  ">
                <h3 className="text-3xl font-bold text-white">رسالتنا</h3>
                <h5 className="text-white">
                  تنظيم الأوقاف وتطويرها والمحافظة عليها وتنميتها بما يحقق شروط
                  الواقفين ويعزز من دورها في التنمية الإقتصادية والإجتماعية
                  وفقاً لمقاصد الشريعة الإسلامية والأنظمة ورؤية المملكة 2030.
                </h5>
              </div>
            </div>
           
          </div>
        </div>
        <div className="relative">
          <div style={contentStyle}>
            <img
              className="absolute top-0 left-0 w-full h-full "
              src="/rooya.png"
            />
            <div className="  w-96  text-white absolute top-36 right-32 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-40" />

              <div className="text-white relative z-10 w-full h-full text-right p-10 flex flex-col space-y-5  ">
                <h3 className="text-3xl font-bold text-white">رؤيتنا</h3>
                <h5 className="text-white">
                  أن تكون الهيئة الداعم الرئيس للنهوض بقطاع الأوقاف بالمملكة
                  العربية السعودية.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <di className="relative">
          <div style={contentStyle}>
            <img
              className="absolute top-0 left-0 w-full h-full"
              src="/Banner.png"
            />
            

            <div className="  w-96  text-white absolute top-36 right-32 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-40" />

              <div className="text-white relative z-10 w-full h-full text-right p-10 flex flex-col space-y-5  ">
                <h3 className="text-3xl font-bold text-white">
                  كتاب الأوقاف التاريخية في المدينة المنورة
                </h3>
                <h5 className="text-white">
                  اطّلع على آخر إصدارات الهيئة العامة للأوقاف لإثراء المكتبة
                  العربية، لتكتشف من خلاله تاريخ أوقاف طيبة الطيّبة على مر
                  العصور عبر لمحات من العطاء والأثر.{" "}
                </h5>
              </div>
            </div>
          </div>
        </di>
      </Carousel>
      <img src="/bar.png" />
    </>
  );
}

export default Hero;
