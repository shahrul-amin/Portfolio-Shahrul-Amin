class ApiService {
  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl;
  }

  async fetch(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }

  async getProjects() {
    return await this.fetch('/projects');
  }

  async getSkills() {
    return await this.fetch('/skills');
  }
}

export default new ApiService();
