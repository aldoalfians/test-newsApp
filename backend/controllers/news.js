import News from "../models/news.js";

export const getAllNews = async (req, res) => {
  try {
    const response = await News.findAll({
      attributes: [
        "uuid",
        "title",
        "content",
        "imageUrl",
        "createdAt",
        "updatedAt",
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getNewsById = async (req, res) => {
  try {
    const news = await News.findOne({
      where: {
        uuid: req.params.id,
      },
      attributes: [
        "uuid",
        "title",
        "content",
        "imageUrl",
        "createdAt",
        "updatedAt",
      ],
    });
    if (!news) return res.status(404).json({ msg: "Berita tidak ditemukan" });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createNews = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    await News.create({
      title,
      content,
      imageUrl,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Berita berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateNews = async (req, res) => {
  const news = await News.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!news) return res.status(404).json({ msg: "Berita tidak ditemukan" });
  const { title, content, imageUrl } = req.body;

  try {
    News.update(
      {
        title,
        content,
        imageUrl,
      },
      {
        where: {
          id: news.id,
        },
      }
    );
    res.status(200).json({ msg: "Berita berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteNews = async (req, res) => {
  const news = await News.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!news) return res.status(404).json({ msg: "Berita tidak ditemukan" });

  try {
    await News.destroy({
      where: {
        id: news.id,
      },
    });
    res.status(200).json({ msg: "Berita berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
