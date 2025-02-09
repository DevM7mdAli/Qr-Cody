import cn from "@/lib/utils";
import { View, ViewProps } from "react-native";

const RootView = ({ children, className, ...props }: ViewProps) => {
  return (
    <View className={cn("bg-primary", className)} {...props}>
      {children}
    </View>
  );
};

export default RootView;