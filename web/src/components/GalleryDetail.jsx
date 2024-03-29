function GalleryDetail({ detailCard }) {
  console.log(detailCard);
  return (
    <a
      href={`https://project-promo-v-module-4-team-2.onrender.com/detail/${detailCard.id}`}
      target="_blank"
      className="galleryLink"
    >
      <div className="gallery">
        <div className="firstBlockTextGallery">
          <img
            className="firstBlockTextGallery__img"
            src={detailCard.photo}
            alt="ProjectPhoto"
          />
          <h5 className="ffirstBlockTextGallery__job">{detailCard.job}</h5>
          <h3 className="firstBlockTextGallery__userName">
            {detailCard.nameAutor}
          </h3>
          <h3 className="firstBlockTextGallery__userName">
            {detailCard.lastname}
          </h3>
        </div>
        <div className="secondBlockTextGallery">
          <h4 className="secondBlockTextGallery__project">{detailCard.name}</h4>
          <h5 className="secondBlockTextGallery__design">
            {detailCard.slogan}
          </h5>
          <p className="secondBlockTextGallery__desc">{detailCard.desc}</p>
          <div className="techsGallery">
            <span className="techsGallery__text">
              {detailCard.technologies}
            </span>
            <span className="techsGallery__icons">
              <i className=" fa-solid fa-globe icon "></i>

              <i className=" fa-brands fa-github icon "></i>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default GalleryDetail;
