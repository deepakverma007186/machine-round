import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";

// create ref for navigation methods to access
export const navigatonRef = createNavigationContainerRef();

// the function helps to navigate from one to another screen with optional parameters
export async function navigate(routeName:string, params?:object){
    navigatonRef.isReady();
    if(navigatonRef.isReady()){
        navigatonRef.dispatch(CommonActions.navigate(routeName,params));
    }
}

/**
 * 
 * @param routeName 
 * @param params 
 * 
 * function helps to replace the navigation stack with provide route name
 */
export async function replace(routeName:string, params?:object){
    navigatonRef.isReady();
    if(navigatonRef.isReady()){
        navigatonRef.dispatch(StackActions.replace(routeName,params));
    }
}

/**
 * function reset the stack and set the index 0 with provided screen name
 * if user press back after reset then the application will close
 *  */ 
export async function resetAndNavigate(routeName:string){
    navigatonRef.isReady();
    if(navigatonRef.isReady()){
        navigatonRef.dispatch(
            CommonActions.reset({
                index:0,
                routes:[{name:routeName}]
            })
        )
    }
}

// the function helps in moving to (recent or previous) screen
export async function goBack(){
    navigatonRef.isReady();
    if(navigatonRef.isReady()){
        navigatonRef.dispatch(CommonActions.goBack());
    }
}

// helps to open same screen with different data, we use push method
export async function push(routeName:string, params?:object){
    navigatonRef.isReady();
    if(navigatonRef.isReady()){
        navigatonRef.dispatch(StackActions.push(routeName,params));
    }
}

// initialize the navigation and make it available
export async function prepareNavigation(){
    navigatonRef.isReady();
}