import React from "react";
import { Upload } from "antd";

const AttachmentUpload = ({ attachments = [] }) => {
  const uploadButton = (
    <div className="flex flex-col gap-2 justify-center items-center rounded-sm border border-dashed cursor-pointer bg-neutral-50 border-zinc-300 h-[104px] text-black text-opacity-50 w-[104px] max-sm:w-[calc(50%_-_4px)]">
      <i className="ti ti-plus" />
      <span>Upload</span>
    </div>
  );

  const fileList = attachments.map((url, index) => ({
    uid: `-${index + 1}`,
    url,
    status: "done",
  }));

  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      className="flex gap-2 max-sm:flex-wrap"
    >
      {uploadButton}
    </Upload>
  );
};

export default AttachmentUpload;
