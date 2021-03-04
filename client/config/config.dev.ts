// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  define: {
    API_URL: 'http://127.0.0.1:7001', // API地址
    API_SECRET_KEY: 'kol', // API调用密钥
    UMI_ENV: 'dev',
  },
});
