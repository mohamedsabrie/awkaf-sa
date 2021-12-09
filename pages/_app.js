import 'antd/dist/antd.css'; 
import '../styles/globals.css'
import { ConfigProvider } from 'antd';
import ar_EG from 'antd/lib/locale/ar_EG';



function MyApp({ Component, pageProps }) {
  return(
    <div dir="rtl">
        <ConfigProvider locale={ar_EG} direction="rtl">
        <Component {...pageProps} />
        </ConfigProvider>
    </div>
  )
  
 
}

export default MyApp
