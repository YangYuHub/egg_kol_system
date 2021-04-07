declare namespace API {
  export interface AppResponse<T = any> {
    status: number;
    data: T;
    errMsg?: string;
  }
  export type CurrentUser = {
    avatar?: string;
    createTime?: number;
    id: number;
    phone: number;
    sign: number;
    token: string;
    updateTime: number;
    username: string;
  };

  export type LoginStateType = {
    status?: any;
    type?: string;
    data?: any;
  };

  export type NoticeIconData = {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  };
  export type NoticeOneData = {
    data:string;
  };
}
