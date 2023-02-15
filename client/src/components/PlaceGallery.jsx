import React, {useState} from 'react';

const PlaceGallery = ({place}) => {
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    if (showAllPhotos) {
        return (
            <div className={"absolute inset-0 bg-black min-h-screen"}>
                <div className={"bg-black p-8 grid gap-4"}>
                    <div>
                        <h2 className="text-3xl">Фото для: {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className={"fixed flex right-12 top-8 gap-1 py-2 px-4 rounded-2xl bg-white text-black hover:opacity-90"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Закрити фото
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <img src={'http://localhost:4000/uploads/' + photo} alt={'elo'} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="relative">
            <div className={"rounded-3xl overflow-hidden mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]"}>
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} src={"http://localhost:4000/uploads/" + place.photos[0]} alt={"elo"}  className={"aspect-square cursor-pointer object-cover"}/>
                        </div>
                    )}
                </div>

                <div className="grid">
                    {place.photos?.[1] && (
                        <img className={"aspect-square cursor-pointer object-cover"} onClick={() => setShowAllPhotos(true)} src={"http://localhost:4000/uploads/" + place.photos[1]} alt={"elo"} />
                    )}
                    <div className="overflow-hidden">
                        {place.photos?.[2] && (
                            <img className={"aspect-square cursor-pointer object-cover relative top-2"} onClick={() => setShowAllPhotos(true)} src={"http://localhost:4000/uploads/" + place.photos[2]} alt={"elo"} />
                        )}
                    </div>
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-primary rounded-2xl shadow shadow-md shadow-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Показати бiльше фотографiй
            </button>
        </div>
    );
};

export default PlaceGallery;