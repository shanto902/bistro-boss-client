import chefService from '../../../assets/home/chef-service.jpg'

const ExtraBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${chefService})`  }} className="min-h-[560px]  bg-cover  bg-right flex mt-20">
            <div className='place-self-center text-center mx-28 bg-white px-40 py-24'>
                <h2 className=' text-5xl'>Bistro Boss</h2>
                <p className=' mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ExtraBanner;