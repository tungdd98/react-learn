import React from "react";
import "./App.scss";
import logo from "assets/logo.svg";
import { Masonry } from "masonic";

const App = () => {
    let i = 0;
    const items = Array.from(Array(50), () => ({ id: i++ }));
    return (
        <div className="wrapper">
            {/* Header */}
            <header className="position-relative">
                <div className="header-top position-absolute p-2 flex-center justify-content-between">
                    <div className="flex-center">
                        <img src={logo} alt="logo" className="logo" />
                        <span className="font-weight-500 ml-1 font-18 text-white">
                            Pexels
                        </span>
                    </div>
                    <div className="flex-center">
                        <ul className="flex-center text-white">
                            <li className="px-3">Khám phá</li>
                            <li className="px-3">Giấy phép</li>
                            <li className="px-3">Tải lên</li>
                        </ul>
                        <button className="btn btn-success font-weight-500">
                            Tham gia
                        </button>
                    </div>
                </div>
                <div className="header-content absolute-center text-white">
                    <h1 className="font-weight-bold">
                        Kho ảnh & video miễn phí tuyệt nhất do những người sáng
                        tạo tài năng chia sẻ.
                    </h1>
                    <div className="header-search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm ảnh và video"
                            className="form-control rounded-lg"
                        />
                    </div>
                    <p className="font-12 mt-1">
                        Được đề xuất: Newyork điện thoại thông minh người Ấn Độ
                        bóng đá chiến lược kế toán xem thêm
                    </p>
                </div>
            </header>
            {/* Nav */}
            <ul className="w-nav flex-center shadow-sm">
                <li className="active p-3 font-weight-500 font-17">
                    Trang chủ
                </li>
                <li className="p-3 font-weight-500 font-17">Khám phá</li>
                <li className="p-3 font-weight-500 font-17">Video</li>
                <li className="p-3 font-weight-500 font-17">Bảng xếp hạng</li>
                <li className="p-3 font-weight-500 font-17">Thử thách</li>
            </ul>
            {/* Main */}
            <main className="container my-4">
                <div className="font-weight-500 font-18">Kho ảnh miễn phí</div>
                <Masonry items={items} render={MasonryCard} />
            </main>
        </div>
    );
};

const MasonryCard = ({ index, data: { id }, width }) => (
    <div>
        <div>Index: {index}</div>
        <pre>ID: {id}</pre>
        <div>Column width: {width}</div>
    </div>
);

export default App;
