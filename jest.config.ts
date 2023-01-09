import { Config } from 'jest';
import { pathsToModuleNameMapper} from 'ts-jest'
import { compilerOptions } from './tsconfig.json';

const config: Config = {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
    // converte os formatos de caminho para entendível do jest.
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      // retorna o diretório que está o jest
      prefix: '<rootDir>/',
    }),
};

export default config;