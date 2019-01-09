
# 操作说明

点击逆时针按钮实现逆时针旋转地图。
点击顺时针按钮实现顺时针旋转地图。
点击箭头按钮重置箭头指示位置和地图方位。

## 实现原理

方向箭头的指向变化由 css 的transform属性控制旋转角度实现，地图的方向的改变由 view 中的 bearing属性值控制，想要这两者同步同步这两者取值即可。该操作的关键在于 bearing 值和 transform 角度值的相互转换

## bearing 值和 transform 角度值的相互转换

&ensp;&ensp; bearing 值和 transform 要想换转换就要知道这两者在顺时针旋转和逆时针旋转时的取值规律。
&ensp;&ensp;验证得知transform取值默认为0，逆时针旋转一周取值由0减小值-360，大于一周循环无限减小。顺时针旋转一周取值由0添加至360度，大于一周循环无限增加。bearing值变化规律为逆时针从北->西->南为0->90-180 从南->东->北(-180)->(-90)->0;顺时针从北->东->南为0->(-90)-(-180) 从南->西->北为180->90->0

## 转换方法

 > **注意：逆时针 translate 的 angle 值做减法，如减10，则恢复原位时做减法，对应减10即可**

### 将 translate 属性的角度值转化为 view 中的 bearing 值

 ```typescript
   angleToBearing = (angle: number) => {
    let currentBearing
    const temp = Math.abs(angle % 360)
    if (temp > 180) {
      currentBearing = -(360 - temp)
    } else {
      currentBearing = temp
    }
    return currentBearing
   }
   ```

### 将view 中的 bearing 值转化为 translate 属性的角度值

   ``` typescript
  bearingToAngle = (bearing: number) => {
    let currentBearing
    if (bearing > 0) {
      currentBearing = bearing
    } else {
      currentBearing = 360 - Math.abs(bearing)
    }
    return currentBearing
   }
   ```