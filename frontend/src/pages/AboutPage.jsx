import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const AboutPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;

const About = () => {
  return (
    <div className="flex items-center bg-[#efefef]">
      <div
        className={`${styles.section} 800px:w-[80%] mx-auto bg-white rounded-lg my-4 shadow-md`}
      >
        <h1
          className={`${styles.productTitle} text-[24px] text-center my-4 mt-8 uppercase`}
        >
          CÔNG TY TNHH HOÀNG PHAN AFP
        </h1>
        <div className="mx-auto flex items-center">
          <div className="p-8 pt-0">
            <p className="mt-0 mb-4">
              THUỐC BẢO VỆ THỰC VẬT Ở ĐÂU LÀ TỐT NHẤT VÀ CÓ CHẤT LƯỢNG NHẤT KHU VỰC TỈNH HẬU GIANG?
              Lời nói đầu tiên: CÔNG TY TNHH HOÀNG PHAN AFP với tên quốc tế là " Royal Phan AFP"  xin phép gửi đến quý khách hàng lời chúc sức khỏe và lời chào trân trọng nhất.

              Cảm ơn quý khách hàng đã quan tâm, tin tưởng các sản phẩm, dịch vụ của công ty góp phần tạo nên uy tín thương hiệu trong và ngoài nước.

              CÔNG TY TNHH HOÀNG PHAN AFP chuyên nhập khẩu và phân phối nguyên liệu thuốc bảo vệ thực vật cho nghành nông nghiệp nói chung.
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[20px]">
                <strong>
                  <span>Thiên thời - địa lợi - nhân hòa</span>
                </strong>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[14px]">
                Với điều này, chúng tôi muốn thể hiện mạnh triết lý phát triển của mình:
                “Thỏa mãn ước vọng vì một nền nông nghiệp xanh và bền vững.”
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[20px]">
                <strong>
                  <span>Tầm nhìn</span>
                </strong>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[14px]">
                <span>
                  {/* <strong>1. Chất lượng sản phẩm</strong>:  */}
                  Công ty TNHH HOÀNG PHAN AFP sẽ cung cấp các sản phẩm nông nghiệp hàng đầu
                  và ứng dụng các dây chuyền sản xuất sản phẩm sinh học theo công nghệ mới đáp ứng cho ngành nông nghiệp.
                </span>
              </span>
            </p>
            {/* <p className="mt-0 mb-4">
                <span className="text-[14px]">
                  <span>
                    <strong>2. An toàn và hiệu quả</strong>: 
                    Sản phẩm của chúng tôi được kiểm tra để đảm bảo an toàn 
                    khi sử dụng và hiệu quả trong việc áp dụng vào nông nghiệp thực tế.
                  </span>
                </span>
              </p>
              <p className="mt-0 mb-4">
                <span className="text-[14px]">
                  <span>
                    <strong>3. Sự đa dạng</strong>: 
                    Chúng tôi cung cấp một loạt các sản phẩm đa dạng, từ hạt giống đến đất trồng 
                    và dụng cụ, để phục vụ nhu cầu đa dạng của người nông dân và nhà vườn.
                  </span>
                </span>
              </p>*/}
            <p className="mt-0 mb-4">
              <span className="text-[20px]">
                <strong>
                  <span>Sứ mệnh</span>
                </strong>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[14px]">
                <span>
                  {/* <strong>1. Tư vấn sản phẩm</strong>:  */}
                  Cung cấp những sản phẩm, dịch vụ chất lượng thỏa mãn ước vọng
                  vì một nền nông nghiệp xanh và bền vững.
                </span>
              </span>
            </p>
            {/* <p className="mt-0 mb-4">
                <span className="text-[14px]">
                  <span>
                    <strong>2. Hướng dẫn sử dụng</strong>:  
                    Chúng tôi cung cấp thông tin chi tiết về cách sử dụng,
                     bảo quản và áp dụng sản phẩm một cách hiệu quả nhất.
                  </span>
                </span>
              </p>
              <p className="mt-0 mb-4">
                <span className="text-[14px]">
                  <span>
                    <strong>3. Dịch vụ hổ trợ khách hàng</strong>: 
                    Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng lắng nghe
                     và giải đáp mọi thắc mắc của bạn, đảm bảo bạn có trải nghiệm mua sắm tốt nhất.
                  </span>
                </span>
              </p> */}
            <p className="mt-0 mb-4">
              <span className="text-[20px]">
                <strong>
                  <span>Thành tựu</span>
                </strong>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[14px]">
                <span>
                  {/* <strong>1. Tư vấn sản phẩm</strong>:  */}
                  Sự thỏa mãn khách hàng, cộng đồng, và các cổ đông là cơ sở của việc đánh giá
                  những thành tựu mà chúng tôi mang lại được cho khách hàng
                  Chúng tôi luôn biết trân trọng những thành tựu của mình và niềm vinh dự, niềm tự hào
                  được tôn trọng bởi các đối tác, bởi cộng đồng, và các cổ đông.
                </span>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[20px]">
                <strong>
                  <span>THÔNG TIN LIÊN HỆ THUỐC BẢO VỆ THỰC VẬT TẠI HẬU GIANG CỦA CHÚNG TÔI LÀ GÌ?</span>
                </strong>
              </span>
              <span className="text-[20px]">
                <strong>
                  <span>Mọi chi tiết xin liên hệ:</span>
                </strong>
              </span>
            </p>
            <p className="mt-0 mb-4">
              <span className="text-[14px]">
                <span>
                  {/* <strong>1. Tư vấn sản phẩm</strong>:  */}
                  ---------------------------ooo0ooo-----------------------------------

                  CÔNG TY TNHH HOÀNG PHAN AFP

                  Địa chỉ: 443B, Ấp Tân Phú A, TT Cái Tắc,

                  H.Châu Thành A, T. Hậu Giang

                  Hotline: 0293 655 77 99 -  0974 250 477

                  Email: agriphan007@mail.com

                  Website: hoangphanafp.com

                  FaceBook: Hoangphan Afp

                  Hân hạnh được hợp tác, đồng hành cùng khách hàng đi đến thành công.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
