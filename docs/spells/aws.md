---
title: "AWS Tricks"
tags: ['aws', 's3', 'boto3', 'iam', 'ebs']
template: spell.mustache
---

### Find and clean up incomplete multi-part uploads

```bash
# List incomplete uploads
aws --profile PROFILE_NAME s3api list-multipart-uploads --bucket BUCKET_NAME
# Abort incomplete uploads (and remove any temporary files)
aws --profile personal s3api abort-multipart-upload --bucket BUCKET_NAME --key KEY_NAME --upload-id UPLOAD_ID
```

### Using AWS Roles

Incantation to use boto with a specific profile from your `.aws/credentials` file:

```python
import boto3

session = boto3.Session(profile_name='NAME_OF_PROFILE_IN_CREDENTIALS_FILE')
dynamoClient = session.client('dynamodb')
```

Using a profile in java:

```java
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.auth.profile.ProfileCredentialsProvider

val s3Client = new AmazonS3Client(new ProfileCredentialsProvider("sandbox"))
```

### Formatting and Mounting an EBS Volume

```bash
# View available disk devices and their mount points
~$ lsblk
# Check if the device already has a file system
~$ sudo file -s /dev/xvdb
# If there is no file system, create one like so
~$ sudo mkfs -t ext4 /dev/xvdb
# Create a mount point, and mount the volume
~$ sudo mkdir /data
~$ sudo mount /dev/xvdb /data
# Check that the volume was mounted properly
~$ df -h
```

Dont forget to change permissions/ ownership of the mount point depending on
who/ what needs to write to it.
