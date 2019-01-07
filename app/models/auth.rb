require 'jwt'

class Auth
  ALGORITHM = 'HS256'

  def self.encrypt(payload)
    JWT.encode(payload, secret_key, ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(token, secret_key, true, { algorithm: ALGORITHM }).first
  end

  def self.secret_key
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.crpAiju73RaLlnLlCvgNceOGoRWAn5_HAq-n53D57EU'
  end
end