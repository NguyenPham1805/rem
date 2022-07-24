import { Link } from './types/film.interface'

export const API_URL = import.meta.env.VITE_API_URL as string

export const GENRES: Link[] = [
  { name: 'Hành động', slug: 'hanh-dong' },
  { name: 'Tình cảm', slug: 'tinh-cam' },
  { name: 'Hài hước', slug: 'hai-huoc' },
  { name: 'Cổ trang', slug: 'co-trang' },
  { name: 'Tâm lí', slug: 'tam-li' },
  { name: 'Hình sự', slug: 'hinh-su' },
  { name: 'Chiến tranh', slug: 'chien-tranh' },
  { name: 'Thể thao', slug: 'the-thao' },
  { name: 'Võ thuật', slug: 'vo-thuat' },
  { name: 'Viễn tưởng', slug: 'vien-tuong' },
  { name: 'Phiêu lưu', slug: 'phieu-luu' },
  { name: 'Khoa học', slug: 'khoa-hoc' },
  { name: 'Kinh dị', slug: 'kinh-di' },
  { name: 'Âm nhạc', slug: 'am-nhac' },
  { name: 'Thần thoại', slug: 'than-thoai' },
  { name: 'Tài liệu', slug: 'tai-lieu' },
  { name: 'Gia đình', slug: 'gia-dinh' },
  { name: 'Chính kịch', slug: 'chinh-kich' },
  { name: 'Bí ẩn', slug: 'bi-han' },
  { name: 'Học đường', slug: 'hoc-duong' },
  { name: 'Kinh điển', slug: 'kinh-dien' },
  { name: 'Phim 18+', slug: 'phim-18' }
]

export const COUNTRIES: Link[] = [
  { name: 'Trung cuốc', slug: 'trung-quoc' },
  { name: 'Hàn Quốc', slug: 'han-quoc' },
  { name: 'Nhật Bản', slug: 'nhat-ban' },
  { name: 'Thái Lan', slug: 'thái lan' },
  { name: 'Âu Mỹ', slug: 'au-my' },
  { name: 'Đài Loan', slug: 'dai-loan' },
  { name: 'Hồng Công', slug: 'hong-khong' },
  { name: 'Ấn Độ', slug: 'an-do' },
  { name: 'Anh', slug: 'anh' },
  { name: 'Pháp', slug: 'phap' },
  { name: 'Canada', slug: 'canada' },
  { name: 'Đức', slug: 'duc' },
  { name: 'Tây Ba Nha', slug: 'tay-ba-nha' },
  { name: 'Thổ Nhĩ Kỳ', slug: 'tho-nhi-ky' },
  { name: 'Hà Lan', slug: 'ha-lan' },
  { name: 'Indonesia', slug: 'indonesia' },
  { name: 'Nga', slug: 'nga' },
  { name: 'Mexico', slug: 'mexico' },
  { name: 'Ba Lan', slug: 'ba-lan' },
  { name: 'Úc', slug: 'uc' },
  { name: 'Thụy Điển', slug: 'thuy-dien' },
  { name: 'Malaysia', slug: 'malaysia' },
  { name: 'Brazil', slug: 'brazil' },
  { name: 'Philippines', slug: 'philippines' },
  { name: 'Bồ Đào Nha', slug: 'bo-dao-nha' },
  { name: 'Ý', slug: 'y' },
  { name: 'Đan Mạch', slug: 'dan-mach' },
  { name: 'UAE', slug: 'uae' },
  { name: 'Na Uy', slug: 'na-uy' },
  { name: 'Thụy Sĩ', slug: 'thuy-si' },
  { name: 'Châu Phi', slug: 'chau-phi' },
  { name: 'Nam Phi', slug: 'nam-phi' },
  { name: 'Ukraina', slug: 'ukraina' },
  { name: 'Ả Rập Xê Út', slug: 'a-rap-xe-ut' }
]

export const FILM_TYPE: Link[] = [
  { name: 'Phim mới', slug: 'phim-moi' },
  { name: 'Phim sắp chiếu', slug: 'phim-sap-chieu' },
  { name: 'Phim bộ', slug: 'phim-bo' },
  { name: 'Phim lẻ', slug: 'phim-le' },
  { name: 'Phim vietsub', slug: 'phim-vietsub' },
  { name: 'Phim thuyết minh', slug: 'phim-thuyet-minh' },
  { name: 'Phim lồng tiếng', slug: 'phim-long-tieng' },
  { name: 'Phim bộ đang chiếu', slug: 'phim-bo-dang-chieu' },
  { name: 'Phim bộ hoàn thành', slug: 'phim-bo-hoan-thanh' },
  { name: 'TV shows', slug: 'tv-shows' },
  { name: 'Anime', slug: 'hoat-hinh' },
  { name: 'Subteam', slug: 'subteam' }
]

export const SORT_FILM: Link[] = [
  { name: 'Phim mới nhất', slug: '_id' },
  { name: 'Thời gian cập nhật', slug: 'modified.time' },
  { name: 'Năm sản xuất', slug: 'year' }
]

export const YEAR: Link[] = [
  { name: '2022', slug: '2022' },
  { name: '2021', slug: '2021' },
  { name: '2020', slug: '2020' },
  { name: '2019', slug: '2019' },
  { name: '2018', slug: '2018' },
  { name: '2017', slug: '2017' },
  { name: '2016', slug: '2016' },
  { name: '2015', slug: '2015' },
  { name: '2014', slug: '2014' },
  { name: '2013', slug: '2013' },
  { name: '2012', slug: '2012' },
  { name: '2011', slug: '2011' },
  { name: '2010', slug: '2010' }
]

export const filter: { [key: string]: Link[] } = {
  slug: FILM_TYPE,
  category: GENRES,
  country: COUNTRIES,
  year: YEAR,
  sortField: SORT_FILM
}
