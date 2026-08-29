# 3D 模型目录

此目录用于存放未来的 3D 模型文件（`.glb` / `.gltf`），例如在作品中集添加自定义角色、产品模型等。

当前版本的英雄区正四面体为代码内程序化生成的几何体（`src/components/three/Tetrahedron.tsx`），无需外部模型文件。

如果之后要加载模型，可把文件放入本目录，并使用 `@react-three/drei` 的 `useGLTF` 加载，例如：

```ts
import { useGLTF } from "@react-three/drei";

const { scene } = useGLTF("/models/your-model.glb");
```

注意：`.glb` 会被 Next.js 作为静态资源自动托管，直接放在 `public/models/` 下即可。
