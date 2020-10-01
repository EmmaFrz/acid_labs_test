import React, { useEffect, useState } from 'react';
import Api from '../../resources/api';
import HomeWrapper from '../../components/home/homeWrapper';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [images, setImage] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await Api.getAll();
                setPosts(response.data.data.posts.data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        };
        const fetchImages = async () => {
            setLoading(true);
            try{
                const imagenes = await Api.getImages();
                setImage(imagenes.data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        }
        fetchData();
        fetchImages();
    }, [])

    return(
        <HomeWrapper 
            posts={posts}
            isLoading={isLoading}
            images={images}
        />
    );

}

export default Home;