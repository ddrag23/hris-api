import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../features/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOne(username);
    const matchPassword = await compare(pass, user.password);
    if (!matchPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      user: {
        email: user.email,
        name: user.name,
        role: user.role.name,
      },
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
