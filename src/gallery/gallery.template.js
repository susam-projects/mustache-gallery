const galleryTemplate = `
<section class='gallery-wrapper'>
  <div class='gallery' tabindex='0'>
    <section class='gallery__icon gallery__icon-left'>
      <i class='fas fa-chevron-left'></i>
    </section>
    <section class='gallery__images-container'>
      <ul class='gallery__image-list'>
        {{#photos}}
            <li class='gallery__image-item' data-id='{{id}}'>
              {{#src}}
                <div 
                  class='gallery__image gallery__image-{{scale}}'
                  style='background-image:url("{{url}}")'
                ></div>
              {{/src}}
            </li>
        {{/photos}}
      </ul>
    </section>
    <section class='gallery__icon gallery__icon-right'>
      <i class='fas fa-chevron-right'></i>
    </section>
  </div>
</section>
`;

export default galleryTemplate;
