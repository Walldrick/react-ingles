const VideoSection = () => {
    return (
        <section className="flex justify-center items-center">
            <iframe
                className="border border-amber-50 rounded-lg"
                width="560"
                height="315"
                src=""
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </section>
    );
}

export default VideoSection;