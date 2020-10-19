import Image from '../infra/typeorm/entities/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.API_URL}/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
