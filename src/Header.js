import './App.css';

// Header...
const Header = ({ count }) => {
    return (
        <div className='d-flex justify-content-between m-0  p-2 px-4 align-items-center w-100 header'>
            <h2> Hi-Fi Shopping</h2>
            <button className='btn btn-light'>🛒
                <sup className='bg-dark rounded-5 px-2 m-0 text-light font-weight-bold'>
                    {count}
                </sup>
            </button>
        </div>
    )
}

export default Header;