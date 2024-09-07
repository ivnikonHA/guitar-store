#!node

import { CLIApplication, GenerateCommand, HelpCommand } from './cli/index.js';

function bootstrap() {
    const cliApplication = new CLIApplication();

    cliApplication.registerCommands([
        new HelpCommand(),
        new GenerateCommand()
    ]);
    cliApplication.processCommand(process.argv);
}

bootstrap();