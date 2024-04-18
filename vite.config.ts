import {
    defineConfig,
    UserConfigExport,
} from 'vite'
console.log("🚀 ~ defineConfig ~ B12312UILD_TARGET:")
export default defineConfig(() => {
    const { BUILD_TARGET } = process.env;
    console.log("🚀 ~ defineConfig ~ BUILD_TARGET:", BUILD_TARGET)
    const config: UserConfigExport = {
        css: {
            //css预处理
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "vant/lib/index.css";'
                }
            },
        },
    }
    return config
})