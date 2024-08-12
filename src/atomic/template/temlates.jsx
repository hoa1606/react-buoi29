import { Outlet, Link } from "react-router-dom";

export function Template() {
    return (
        <>
            <nav className="flex gap-8 m-4">
                <Link  to="/">Sản phẩm</Link>
                <Link to="/giohang">Giỏ hàng</Link>
            </nav>
            <Outlet /> {/* Thêm Outlet để hiển thị nội dung của các route con */}
        </>
    );
};
