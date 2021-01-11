import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Card, Form, Rating } from 'semantic-ui-react';
import {
  useCreateReviewMutation,
  useSearchTopicLazyQuery,
} from '@reviewit/graphql';
import { Dropdown } from 'semantic-ui-react';
import { debounce, includes } from 'lodash';
declare type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const CreateReviewPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [currentTopic, setCustomTopic] = useState<string | undefined>();
  const [formState, setFormState] = useState<{
    name: string;
    review: string;
    topic: string;
    rating: number;
    url: string;
  }>({
    name: '',
    review: '',
    topic: '',
    rating: 0,
    url: '',
  });

  const formHelper = (key: string) => {
    return {
      value: formState[key] || '',
      setValue: (value: string | number) => {
        setFormState((curr) => ({ ...curr, [key]: value }));
      },
      onChange: (event: ChangeEvent<FormControlElement>) => {
        setFormState((curr) => ({ ...curr, [key]: event.target?.value }));
      },
    };
  };

  const [fetch, { data, loading }] = useSearchTopicLazyQuery();

  const [mutate, { loading: mutationLoading }] = useCreateReviewMutation();

  const topics = data?.topic?.map((val) => ({
    key: val.id,
    text: val.name,
    value: val.name,
  }));

  if (!includes(topics, (value) => value.topic === formState.topic)) {
    topics?.push({
      text: formState.topic,
      value: formState.topic,
      key: 'custom',
    });
  }

  const debouncer = useRef(debounce(fetch, 300)).current;

  return (
    <div className="col py-3">
      <Card fluid>
        <Card.Content>
          <Card.Header>Add a Review</Card.Header>
          <Card.Description>
            <Form
              onSubmit={() => {
                console.log(formState);
                mutate({ variables: formState });
              }}
            >
              <Form.Field>
                <label>Title</label>
                <input placeholder="Review Title" {...formHelper('name')} />
              </Form.Field>
              <Form.Field>
                <label>Product</label>
                <Dropdown
                  placeholder="eg: iphone 12, etc..."
                  fluid
                  search
                  selection
                  allowAdditions
                  value={formState.topic}
                  onChange={(event, { value }: { value: string }) => {
                    const { setValue } = formHelper('topic');
                    setValue(value);
                  }}
                  loading={loading}
                  onAddItem={(e, { value }: { value: string }) => {
                    const { setValue } = formHelper('topic');
                    setValue(value);
                  }}
                  onSearchChange={(event) => {
                    debouncer({
                      variables: {
                        match: `%${event.target?.value || ''}%`,
                      },
                    });
                  }}
                  options={topics}
                />
              </Form.Field>
              <Form.Field>
                <label>URL</label>
                <input {...formHelper('url')} placeholder={'www.example.com'} />
              </Form.Field>
              <Form.Field>
                <label>Rating</label>
                <Rating
                  value={formState.rating}
                  onRate={(event, { rating }: { rating: number }) =>
                    setFormState((curr) => ({
                      ...curr,
                      rating,
                    }))
                  }
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  {...formHelper('rating')}
                />
              </Form.Field>
              <Form.Field>
                <label>Review</label>
                <textarea
                  placeholder={'Tell us more'}
                  {...formHelper('review')}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
