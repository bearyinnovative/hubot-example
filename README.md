# hubot-example

BearyChat hubot 样例

## 实现概括

hubot-bearychat 是基于 BearyChat OpenAPI 接口实现的一个 hubot adapter.
可以用作连接 hubot 和 BearyChat 服务。连接后的 hubot 会通过 hubot 机器人的形式加入到团队中，
团队成员可以在讨论组、P2P 对话中跟机器人进行聊天来实现 GitHub hubot 的 chatops 功能。

### 内置脚本

hubot-example 内置了以下脚本：

**scripts/cljdoc.js**:

支持通过 `cljdoc {keyword}` 的形式查询 clojure doc api.

**scripts/haha.js**:

hubot hear / respond 的样例。

## 配置方式

### 公有云

公有云配置方式请参考 [hubot-bearychat 文档](https://github.com/bearyinnovative/hubot-bearychat/blob/master/README_CN.md)。

### 私有部署

因为私有部署是独立运行在企业内部 BearyChat 实例，所以需要在公有云的设置基础上，添加以下环境变量：

```shell
# 设置私有部署开放 API 接口的地址
$ export BEARYCHAT_API_BASE=http://api.{BCE_SERVER_NAME}/v1
# 设置 rtm tokens （同公有云设置）
$ export HUBOT_BEARYCHAT_TOKENS={HUBOT_TOKEN}
# 启动 hubot
$ ./bin/hubot -a bearychat
```

**正常配置后的启动效果**

```shell
$ ./bin/hubot -a bearychat
npm WARN hubot-example@0.0.1 No repository field.
[Mon Apr 10 2017 08:40:06 GMT+0800 (CST)] INFO Connect using RTM mode
[Mon Apr 10 2017 08:40:06 GMT+0800 (CST)] INFO Connected as @大家好我是hubot
[Mon Apr 10 2017 08:40:07 GMT+0800 (CST)] INFO /hubot-example/scripts/cljdoc.js is using deprecated documentation syntax
[Mon Apr 10 2017 08:40:07 GMT+0800 (CST)] INFO /hubot-example/scripts/haha.js is using deprecated documentation syntax
```

## LICENSE

&copy; BearyInnovative
