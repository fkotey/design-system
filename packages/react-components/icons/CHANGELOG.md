# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@3.0.0...@datacamp/waffles-icons@4.0.0) (2021-02-02)


### Features

* update emotion to emotion 11 ([5420a92](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/5420a92))


### BREAKING CHANGES

* The peer dependency on emotion is now v11. In order to update, all waffles and emotion dependencies should be updated together. The codemod provided by emotion makes this process very easy.





# [3.0.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.2.4...@datacamp/waffles-icons@3.0.0) (2021-02-01)


### Bug Fixes

* remove peer dependency warning for react-native ([fda85f0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/fda85f0))


### BREAKING CHANGES

* this is only a breaking change when using react-native and can be ignored on web. Otherwise react-native-svg is now a peer dependency rather than a direct dependency and will need to be installed to use the mobile icons.





## [2.2.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.2.3...@datacamp/waffles-icons@2.2.4) (2021-01-07)


### Bug Fixes

* remove id attributes from icons ([a7a7971](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/a7a7971))





## [2.2.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.2.2...@datacamp/waffles-icons@2.2.3) (2020-12-16)

**Note:** Version bump only for package @datacamp/waffles-icons





## [2.2.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.2.1...@datacamp/waffles-icons@2.2.2) (2020-12-10)

**Note:** Version bump only for package @datacamp/waffles-icons





## [2.2.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.2.0...@datacamp/waffles-icons@2.2.1) (2020-11-24)

**Note:** Version bump only for package @datacamp/waffles-icons





# [2.2.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.1.0...@datacamp/waffles-icons@2.2.0) (2020-11-19)


### Features

* add react 17 compatibility ([fcf19c6](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/fcf19c6))
* instagram icon ([0265c27](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/0265c27))





# [2.1.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.2...@datacamp/waffles-icons@2.1.0) (2020-11-06)


### Features

* rebrand icon zip ([744ddac](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/744ddac))





## [2.0.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.1...@datacamp/waffles-icons@2.0.2) (2020-11-03)

**Note:** Version bump only for package @datacamp/waffles-icons





## [2.0.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.0...@datacamp/waffles-icons@2.0.1) (2020-10-26)

**Note:** Version bump only for package @datacamp/waffles-icons





# [2.0.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.0-beta.2...@datacamp/waffles-icons@2.0.0) (2020-10-21)

**Note:** Version bump only for package @datacamp/waffles-icons





# [2.0.0-beta.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.0-beta.1...@datacamp/waffles-icons@2.0.0-beta.2) (2020-10-15)


### Features

* update datacamp brand icon ([cd98c2e](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/cd98c2e))





# [2.0.0-beta.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@2.0.0-beta.0...@datacamp/waffles-icons@2.0.0-beta.1) (2020-09-29)


### Features

* alpa icons ([492c9a3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/492c9a3))





# [2.0.0-beta.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.10-beta.0...@datacamp/waffles-icons@2.0.0-beta.0) (2020-09-09)


### Bug Fixes

* make react-native default color white ([6bc1889](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/6bc1889))
* react-native builds ([827efcb](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/827efcb))


### BREAKING CHANGES

* The default color for mobile icons is now white. This 
doesn't affect web icons where the default remains 'currentColor'
* icons are no longer nested within web/mobile. If 
importing normally this shouldn't affect web apps, but for react native 
imports they can now come from the root of the package.





## [1.10.10-beta.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.9...@datacamp/waffles-icons@1.10.10-beta.0) (2020-08-14)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.9](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.8...@datacamp/waffles-icons@1.10.9) (2020-08-14)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.9-beta.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.8...@datacamp/waffles-icons@1.10.9-beta.0) (2020-08-06)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.8](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.7...@datacamp/waffles-icons@1.10.8) (2020-08-06)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.8-beta.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.7...@datacamp/waffles-icons@1.10.8-beta.0) (2020-08-03)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.7](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.6...@datacamp/waffles-icons@1.10.7) (2020-07-30)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.7-beta.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.6...@datacamp/waffles-icons@1.10.7-beta.0) (2020-07-07)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.6](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.5...@datacamp/waffles-icons@1.10.6) (2020-07-07)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.5](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.4...@datacamp/waffles-icons@1.10.5) (2020-07-01)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.3...@datacamp/waffles-icons@1.10.4) (2020-06-17)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.2...@datacamp/waffles-icons@1.10.3) (2020-06-05)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.1...@datacamp/waffles-icons@1.10.2) (2020-05-28)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.10.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.10.0...@datacamp/waffles-icons@1.10.1) (2020-05-20)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.10.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.7...@datacamp/waffles-icons@1.10.0) (2020-05-07)


### Features

* google icons ([1290ef1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/1290ef1))





## [1.9.7](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.6...@datacamp/waffles-icons@1.9.7) (2020-04-27)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.9.6](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.5...@datacamp/waffles-icons@1.9.6) (2020-04-24)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.9.5](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.4...@datacamp/waffles-icons@1.9.5) (2020-04-15)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.9.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.3...@datacamp/waffles-icons@1.9.4) (2020-04-01)


### Bug Fixes

* remove dev files from bundled packages ([d14472d](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/d14472d))





## [1.9.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.2...@datacamp/waffles-icons@1.9.3) (2020-03-11)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.9.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.1...@datacamp/waffles-icons@1.9.2) (2020-02-27)


### Bug Fixes

* correctly list emotion and prop types dependencies ([10bcea6](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/10bcea6))





## [1.9.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.9.0...@datacamp/waffles-icons@1.9.1) (2020-01-27)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.9.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.5...@datacamp/waffles-icons@1.9.0) (2020-01-20)


### Features

* slack colored icon ([dfdc97f](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/dfdc97f))





## [1.8.5](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.4...@datacamp/waffles-icons@1.8.5) (2020-01-15)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.8.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.3...@datacamp/waffles-icons@1.8.4) (2020-01-09)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.8.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.2...@datacamp/waffles-icons@1.8.3) (2019-12-18)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.8.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.1...@datacamp/waffles-icons@1.8.2) (2019-12-02)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.8.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.8.0...@datacamp/waffles-icons@1.8.1) (2019-11-26)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.8.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.7.4...@datacamp/waffles-icons@1.8.0) (2019-11-19)


### Features

* added dollar icon ([43646b0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/43646b0))





## [1.7.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.7.3...@datacamp/waffles-icons@1.7.4) (2019-11-15)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.7.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.7.2...@datacamp/waffles-icons@1.7.3) (2019-11-12)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.7.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.7.1...@datacamp/waffles-icons@1.7.2) (2019-11-06)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.7.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.7.0...@datacamp/waffles-icons@1.7.1) (2019-10-31)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.7.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.6.4...@datacamp/waffles-icons@1.7.0) (2019-10-23)


### Features

* added exit icon ([b592c64](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/b592c64))





## [1.6.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.6.3...@datacamp/waffles-icons@1.6.4) (2019-10-17)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.6.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.6.2...@datacamp/waffles-icons@1.6.3) (2019-10-14)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.6.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.6.1...@datacamp/waffles-icons@1.6.2) (2019-10-10)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.6.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.6.0...@datacamp/waffles-icons@1.6.1) (2019-10-02)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.6.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.5.1...@datacamp/waffles-icons@1.6.0) (2019-09-25)


### Features

* generate png icons in the zip file ([9febb7e](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/9febb7e))





## [1.5.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.5.0...@datacamp/waffles-icons@1.5.1) (2019-09-19)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.5.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.4.1...@datacamp/waffles-icons@1.5.0) (2019-09-16)


### Features

* bookmark icon ([26b5274](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/26b5274))





## [1.4.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.4.0...@datacamp/waffles-icons@1.4.1) (2019-09-12)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.4.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.3.3...@datacamp/waffles-icons@1.4.0) (2019-09-09)


### Features

* random icon ([044168f](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/044168f))
* scala icon ([ae82397](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/ae82397))





## [1.3.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.3.2...@datacamp/waffles-icons@1.3.3) (2019-09-06)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.3.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.3.1...@datacamp/waffles-icons@1.3.2) (2019-08-29)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.3.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.3.0...@datacamp/waffles-icons@1.3.1) (2019-08-23)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.3.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.2.3...@datacamp/waffles-icons@1.3.0) (2019-08-19)


### Features

* add ability to override title of icon ([77c6118](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/77c6118))
* add titles to all icons ([21dab10](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/21dab10))
* make icons WCAG compliant ([14324e2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/14324e2))





## [1.2.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.2.2...@datacamp/waffles-icons@1.2.3) (2019-08-14)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.2.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.2.1...@datacamp/waffles-icons@1.2.2) (2019-08-08)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.2.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.2.0...@datacamp/waffles-icons@1.2.1) (2019-08-06)

**Note:** Version bump only for package @datacamp/waffles-icons





# [1.2.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.1.0...@datacamp/waffles-icons@1.2.0) (2019-07-16)


### Features

* expose es module as well as common js ([8a6c9e2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/8a6c9e2))





# [1.1.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.9...@datacamp/waffles-icons@1.1.0) (2019-07-15)


### Features

* build icons for react-native ([db78597](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/db78597))
* use babel runtime in builds ([f8451ab](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/f8451ab))





## [1.0.9](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.8...@datacamp/waffles-icons@1.0.9) (2019-07-10)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.8](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.7...@datacamp/waffles-icons@1.0.8) (2019-07-05)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.7](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.6...@datacamp/waffles-icons@1.0.7) (2019-07-02)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.6](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.5...@datacamp/waffles-icons@1.0.6) (2019-06-27)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.5](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.4...@datacamp/waffles-icons@1.0.5) (2019-06-17)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.4](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.3...@datacamp/waffles-icons@1.0.4) (2019-06-12)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.2...@datacamp/waffles-icons@1.0.3) (2019-06-11)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.2](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.1...@datacamp/waffles-icons@1.0.2) (2019-05-29)

**Note:** Version bump only for package @datacamp/waffles-icons





## [1.0.1](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@1.0.0...@datacamp/waffles-icons@1.0.1) (2019-05-28)


### Bug Fixes

* add trailing slash to repository URLs ([25f1174](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/25f1174))





# [1.0.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@0.2.0...@datacamp/waffles-icons@1.0.0) (2019-05-22)


### Bug Fixes

* rename icons to follow conventions ([e911743](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/e911743))


### Features

* inverted health icon ([a0515ce](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/a0515ce))
* regular health icon ([4282583](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/4282583))


### BREAKING CHANGES

* The slide icons have been renamed to be more generic
for multiple use cases. Video has been renamed to VideoCamera and
VideoPlayer has been renamed to Video.





# [0.2.0](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/compare/@datacamp/waffles-icons@0.1.0...@datacamp/waffles-icons@0.2.0) (2019-05-22)


### Bug Fixes

* home icon glitch ([f24f6fc](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/f24f6fc))


### Features

* inverted terminal icon ([c1989db](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/c1989db))
* terminal regular icon ([c0c1ca3](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/c0c1ca3))





# 0.1.0 (2019-05-17)


### Features

* icons package ([b2d5165](https://github.com/datacamp-engineering/design-system/tree/master/packages/react-components/icons/commit/b2d5165))
