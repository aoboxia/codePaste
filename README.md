# 基于Pygments的文档代码高亮demo网站

由于Pygments官网的demo现在已经停止运行了，于是自己写了一个简单的demo，用于日常文档编辑中的代码高亮的需要。
大家也可以自己下载到本地，内容十分简洁，便于使用。

## 安装
1. 将项目下载到本地
`git clone https://github.com/aoboxia/codePaste.git`
2. 安装python依赖
`pip install -r requirements.txt`
3. 启动web服务
`python main.py`
4. 浏览器打开`localhost:8080`

## 使用说明
1. 本项目采用最简洁的web.py框架,基于Pygments编写的一个demo,只用到了一个python文件
2. demo地址：`paste.ctguqmx.cn`
3. 直接在文本框中粘贴代码，一键格式化，然后将格式化后的代码复制粘贴到文档当中即可
4. 可输入文件后缀名自动确定代码格式，支持多种代码配色
