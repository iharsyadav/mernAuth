class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findAll(filter = {}, options = {}) {
    return await this.model.find(filter, null, options);
  }

  async findById(id) {
    return await this.model.findById(id);
  }

  async findOne(filter = {}) {
    return await this.model.findOne(filter);
  }

  async updateById(id, data, options = { new: true }) {
    return await this.model.findByIdAndUpdate(id, data, options);
  }

  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async exists(filter = {}) {
    return await this.model.exists(filter);
  }

  async count(filter = {}) {
    return await this.model.countDocuments(filter);
  }

  async paginate(filter = {}, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.model.find(filter).skip(skip).limit(limit),
      this.model.countDocuments(filter),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}

export default BaseRepository;
