interface RegistryType {
  resources: {
    [key: string]: {
      url: string
    }
  }
}

export const registry: RegistryType = {
  resources: {
    users: {
      url: 'http://localhost:3001'
    }
  }
}
