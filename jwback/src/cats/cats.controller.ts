import {
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Query,
    Redirect,
    Req,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    // Resource
    @Post()
    @HttpCode(204)
    @Header('Cache-control', 'none')
    crate(): string {
        return 'This action adds a new cat';
    }

    // GET /cats
    @Get()
    findAll(): string {
        return 'This actions returns all cats';
    }

    // Route params
    @Get(':id')
    findOne(@Param() params): string {
        return `This action returns a #${params.id} cat`;
    }

    // GET /cats/breed
    @Get('breed')
    findBreed(@Req() request: Request): string {
        return 'This actions returns all breed/cats';
    }

    // WildCard
    @Get('ab*cd')
    findWildcard() {
        return 'This route uses a wildcard';
    }

    // Redirection
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === 5) {
            return { url: 'https//docs.nestjs.com/v5/' };
        }
    }

    // Sub-Domain Routing
    // @Controller({ host: ':account.example.com' })
    // export class AccountController {
    //   @Get()
    //   getInfo(@HostParam('account') account: string) {
    //     return account;
    //   }
    // }
}
